from setuptools import setup

setup(
    name='library_management',
    version='0.0.1',
    description='Library Management App built on Frappe',
    author='Meeran',
    packages=['library_management'],
    include_package_data=True,
    install_requires=['frappe'],
)
