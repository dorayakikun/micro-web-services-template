FROM mysql:5.7

# Set debian default locale to ja_JP.UTF-8
RUN apt-get update && \
    apt-get install -y locales locales-all && \
    rm -rf /var/lib/apt/lists/*