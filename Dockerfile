# HOME-331: multi-stage build — Vite build in Node, serve static via nginx:alpine.
# Runtime no longer needs node_modules; keeps /health + CSP for the Worker failover.

FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3009
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3009/health | grep -q '"ok":true' || exit 1
CMD ["nginx", "-g", "daemon off;"]
