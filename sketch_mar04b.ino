//Servent
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>

ESP8266WiFiMulti wifiMulti;
int prev=2;

void setup(void) {
  Serial.begin(115200);

  WiFi.mode(WIFI_STA);
  wifiMulti.addAP("********", "********");


  Serial.println("\n..System Start..");

  pinMode(5, INPUT);
}

void loop() {
  if (wifiMulti.run() == WL_CONNECTED) {
    HTTPClient http;
    if (digitalRead(5)) {
      if(prev!=1){
        Serial.print(WiFi.SSID());
        http.begin("http://***/rest/1/true");
        int httpCode = http.POST("?");
        String payload = http.getString();
        Serial.print(httpCode);
        Serial.println(payload);
        http.end();
        prev=1;
      }
    } else {
      if(prev!=0){
        Serial.print(WiFi.SSID());
        http.begin("http://***/rest/1/false");
        int httpCode = http.POST("?");
        String payload = http.getString();
        Serial.print(httpCode);
        Serial.println(payload);
        http.end();
        prev=0;
      }
    }
  }
  delay(200);
}
