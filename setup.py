from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in speech_reco/__init__.py
from speech_reco import __version__ as version

setup(
	name="speech_reco",
	version=version,
	description="Speech Recognition",
	author="Kaviraj",
	author_email="coder@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
