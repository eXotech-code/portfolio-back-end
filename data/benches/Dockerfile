FROM python:alpine as base
# Set proper timezone as pointed to by env var.
RUN apk add --update tzdata

FROM python:alpine
WORKDIR /app
COPY --from=base /usr/share/zoneinfo /usr/share/zoneinfo
RUN cp /usr/share/zoneinfo/Europe/Warsaw /etc/localtime
COPY . .
RUN pip install -r requirements.txt
EXPOSE 80
CMD ["./api.py"]