#!/usr/bin/python
# -*- coding: utf-8 -*-
import ssl,json,sys
try: # Python 2/3 compatibility
    from urllib.parse import urlparse, urlencode
    from urllib.request import urlopen, Request
    from urllib.error import HTTPError
except ImportError:
    from urlparse import urlparse
    from urllib import urlencode
    from urllib2 import urlopen, Request, HTTPError

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

base_ticker = "{{base_ticker}}" if "{{base_ticker}}"[0] != "{" else "EUR"
convert_ticker = "{{convert_ticker}}" if "{{convert_ticker}}"[0] != "{" else "USD"
base_symbol = "{{base_symbol}}" if "{{base_symbol}}"[0] != "{" else  "€"
convert_symbol = "{{convert_symbol}}" if "{{convert_symbol}}"[0] != "{" else  "$"

try:
    url = "https://api.exchangeratesapi.io/latest?base={}&symbols={}".format(base_ticker, convert_ticker)
    data = urlopen(url, context=ctx)
    obj=json.load(data)
    rate = str(obj['rates'][convert_ticker])
    print(base_symbol+'1 = ' + convert_symbol + rate)

except HTTPError as e:
    print('Unable to get data from API')
