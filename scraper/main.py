#!/usr/bin/env python3
import os
import cloudscraper
from bs4 import BeautifulSoup
import requests
import random

# Initialize cloudscraper
scraper = cloudscraper.create_scraper()

# URL and directory to download
base_url = 'http://preview.enroutedigitallab.com/html/beats/'
directory = 'fonts'

# Function to fetch browser headers from API
def fetch_browser_headers(api_key):
    headers_api_url = f"https://headers.scrapeops.io/v1/browser-headers?api_key={api_key}&num_results=1"
    response = requests.get(headers_api_url)
    if response.status_code == 200:
        headers_data = response.json()
        return headers_data['headers'][0]  # Assuming API returns headers in JSON format
    else:
        raise Exception(f"Error fetching browser headers from API: {response.status_code}")

# Function to fetch proxy from API
def fetch_proxy(api_key):
    proxy_api_url = f"https://proxy.scrapeops.io/v1/?api_key={api_key}&url={base_url}&residential=true"
    response = requests.get(proxy_api_url)
    if response.status_code == 200:
        proxy_data = response.json()
        return proxy_data['proxy']  # Assuming API returns proxy address in JSON format
    else:
        raise Exception(f"Error fetching proxy from API: {response.status_code}")

# Function to download files using cloudscraper
def download_files(url, headers, proxy):
    try:
        response = scraper.get(url, headers=headers, proxies=proxy, timeout=10)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            os.makedirs(directory, exist_ok=True)

            for link in soup.find_all('a'):
                href = link.get('href')
                if href and not href.startswith('?') and not href.startswith('/'):
                    file_url = base_url + href
                    print(f'Downloading {file_url}')

                    # Download the file
                    file_response = scraper.get(file_url, headers=headers, proxies=proxy, timeout=10)
                    if file_response.status_code == 200:
                        file_path = os.path.join(directory, href)
                        with open(file_path, 'wb') as file:
                            file.write(file_response.content)
                        print(f'Saved {file_path}')
                    else:
                        print(f'Failed to download {file_url} with status code {file_response.status_code}')
        else:
            print(f'Failed to access {url}: Status code {response.status_code}')
    except Exception as e:
        print(f'An error occurred: {str(e)}')

# Example usage:
if __name__ == '__main__':
    try:
        # Example API key (replace with your actual API key)
        api_key = '777fd2bf-3d91-443e-a90f-ca2c0d7be645'

        # Fetch browser headers and proxy
        headers = fetch_browser_headers(api_key)
        proxy = fetch_proxy(api_key)

        # Call the function to download files
        download_files(base_url, headers, proxy)

    except Exception as e:
        print(f'Error: {str(e)}')
