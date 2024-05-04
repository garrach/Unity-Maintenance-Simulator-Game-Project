FROM php:8.1-fpm

# Install system dependencies
RUN apt-get update && \
    apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install zip

# Set working directory
WORKDIR /var/www/html

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Copy application files
COPY . .

# Install PHP and JavaScript dependencies
RUN composer install --no-dev --optimize-autoloader && \
    npm install


# Expose port if needed
EXPOSE 9000

# Command to run the PHP-FPM server
CMD ["php-fpm"]
