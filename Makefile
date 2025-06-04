# React + Clerk Project Makefile
# Use 'make help' to see available commands

.PHONY: install dev build clean preview lint help

# Default target
.DEFAULT_GOAL := help

# Install dependencies after cloning
install:
	@echo "📦 Installing dependencies..."
	npm install
	@echo "✅ Dependencies installed successfully!"
	@echo "📋 Next steps:"
	@echo "   1. Get your Clerk publishable key from https://clerk.com"
	@echo "   2. Update VITE_CLERK_PUBLISHABLE_KEY in .env.local"
	@echo "   3. Run 'make dev' to start the development server"

# Run the development server
dev:
	@echo "🚀 Starting development server..."
	npm run dev

# Build the project for production
build:
	@echo "🏗️ Building project for production..."
	npm run build

# Preview the production build
preview: build
	@echo "👀 Starting preview server..."
	npm run preview

# Run linting
lint:
	@echo "🔍 Running ESLint..."
	npm run lint

# Clean node_modules and reinstall
clean:
	@echo "🧹 Cleaning node_modules..."
	rm -rf node_modules package-lock.json
	@echo "📦 Reinstalling dependencies..."
	npm install

# Setup for first time use (after cloning)
setup: install
	@echo ""
	@echo "🎉 Setup complete!"
	@echo ""
	@echo "📖 Read CLERK_SETUP.md for detailed Clerk configuration instructions"
	@echo ""
	@echo "⚡ Quick start:"
	@echo "   make dev    # Start development server"
	@echo "   make build  # Build for production"
	@echo "   make help   # Show all available commands"

# Display help information
help:
	@echo ""
	@echo "🔧 Available commands:"
	@echo ""
	@echo "  make install   Install npm dependencies"
	@echo "  make setup     Complete first-time setup (install + instructions)"
	@echo "  make dev       Start development server"
	@echo "  make build     Build for production"
	@echo "  make preview   Preview production build"
	@echo "  make lint      Run ESLint"
	@echo "  make clean     Remove node_modules and reinstall"
	@echo "  make help      Show this help message"
	@echo ""
	@echo "📋 After cloning:"
	@echo "  1. make setup"
	@echo "  2. Configure Clerk key in .env.local"
	@echo "  3. make dev"
	@echo "" 