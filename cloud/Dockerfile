FROM python:3.8-slim

EXPOSE 8080
ENV PORT=8080

ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /home
COPY . /home
RUN pip install -r /home/requirements.txt

CMD ["python", "test.py"]
