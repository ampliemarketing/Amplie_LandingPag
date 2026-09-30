# ---------- 1ª etapa: gera o site (pasta dist/) ----------
FROM node:22-alpine AS build
WORKDIR /app

# Instala as dependências primeiro para aproveitar o cache do Docker
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- 2ª etapa: serve o site com Nginx ----------
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1
