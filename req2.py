import requests
import json
print "here";
list1 = ['business', 'economics', 'education', 'geography','history','internationallaw','journalism','listerature','marketing','media','philosophy','politics','socialogy','socialscience'];

print "Google Books"

for list in list1:
	print list
	r=requests.get("http://127.0.0.1:5000/google-books?q=%s&max-results=20&start-index=21"%(list))
	print r.text;

print "Amazon Books"

for list in list1:
	print list
	r=requests.get("http://127.0.0.1:5000/amazon?q=%s"%(list))
	print r.text;

print "Issuu Books"

for list in list1:
	print list
	r=requests.get("http://127.0.0.1:5000/issuu?q=%s"%(list))
	print r.text;