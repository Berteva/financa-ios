// sw.js - Service Worker para offline-first
const CACHE_NAME = 'financa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax