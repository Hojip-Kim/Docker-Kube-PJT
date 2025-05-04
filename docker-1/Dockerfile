FROM node

# 이 명령어는 이후 실행될 명령어가 이 디렉토리에서 실행됨을 의미함.
WORKDIR /app

COPY package.json /app

RUN npm install

# 첫번째 . : 호스트 디렉토리
# 두번째 . : 컨테이너 디렉토리
COPY . /app

# 도커 컨테이너 내부에서 동작함.
EXPOSE 80

# 일반 RUN과 다른것은 이미지가 생성될때 실행되지않고, 이미지를 기반으로 컨테이너가 시작될 떄 실행됨.
# 컨테이너가 실행된 후 실행되는것임.
# 배열을 전달, 문자열을 전달 가능함.
CMD ["node", "server.js"]