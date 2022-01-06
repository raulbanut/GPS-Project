FROM adoptopenjdk/openjdk11:alpine-jre
EXPOSE 8081

ARG JAR_FILE=target/GPS-Project-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]

