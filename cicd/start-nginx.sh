#!/bin/sh

APP_PATH=/opt/app
STATIC_JS_PATH=$APP_PATH/

grep -rl {REACT_APP_ENV} $STATIC_JS_PATH | xargs sed -i 's|{REACT_APP_ENV}|'$APP_ENV'|g'
grep -rl {REACT_APP_CARTO_SERVER_URL} $STATIC_JS_PATH | xargs sed -i 's|{REACT_APP_CARTO_SERVER_URL}|'$APP_CARTO_SERVER_URL'|g'
grep -rl {REACT_APP_SERVER_URL} $STATIC_JS_PATH | xargs sed -i 's|{REACT_APP_SERVER_URL}|'$APP_SERVER_URL'|g'
grep -rl {REACT_APP_BLOB_URL} $STATIC_JS_PATH | xargs sed -i 's|{REACT_APP_BLOB_URL}|'$APP_BLOB_URL'|g'
grep -rl {REACT_APP_REKI_URL} $STATIC_JS_PATH | xargs sed -i 's|{REACT_APP_REKI_URL}|'$APP_REKI_URL'|g'
grep -rl {REACT_APP_GIC_VIZ_URL} $STATIC_JS_PATH | xargs sed -i 's|{REACT_APP_GIC_VIZ_URL}|'$APP_GIC_VIZ_URL'|g'

nginx -c $APP_PATH/config/nginx.conf -g 'daemon off;'