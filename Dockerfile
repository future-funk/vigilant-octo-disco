FROM jfrogprod.gic.com.sg/bento-base-images/ubi8-nginx-120:1-92.1679484498

USER root

WORKDIR /opt/app

COPY ./out ./

COPY ./start-nginx.sh /opt/app/start-nginx.sh

COPY ./inf.txt /opt/app/inf.xml

RUN chmod -R 775 /opt/app/

USER 1001

CMD ["sh", "/opt/app/start-nginx.sh"]
