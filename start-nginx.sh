#!/bin/sh

SEARCH_PATH=/opt/app/*.js

grep -rl {REACT_APP_ENV} $SEARCH_PATH | xargs sed -i 's|{REACT_APP_ENV}|'$APP_ENV'|g'
grep -rl {REACT_APP_CARTO_SERVER_URL} $SEARCH_PATH | xargs sed -i 's|{REACT_APP_CARTO_SERVER_URL}|'$APP_CARTO_SERVER_URL'|g'
grep -rl {REACT_APP_SERVER_URL} $SEARCH_PATH | xargs sed -i 's|{REACT_APP_SERVER_URL}|'$APP_SERVER_URL'|g'
grep -rl {REACT_APP_BLOB_URL} $SEARCH_PATH | xargs sed -i 's|{REACT_APP_BLOB_URL}|'$APP_BLOB_URL'|g'
grep -rl {REACT_APP_REKI_URL} $SEARCH_PATH | xargs sed -i 's|{REACT_APP_REKI_URL}|'$APP_REKI_URL'|g'
grep -rl {REACT_APP_IRR_ENGINE_URL} $SEARCH_PATH | xargs sed -i 's|{REACT_APP_IRR_ENGINE_URL}|'$APP_IRR_ENGINE_URL'|g'
grep -rl {REACT_APP_GIC_VIZ_URL} $SEARCH_PATH | xargs sed -i 's|{REACT_APP_GIC_VIZ_URL}|'$APP_GIC_VIZ_URL'|g'
grep -rl {REACT_APP_PUBLIC_ADFS_BASE_URL} $SEARCH_PATH | xargs sed -i 's|{REACT_APP_PUBLIC_ADFS_BASE_URL}|'$APP_ADFS_BASE_URL'|g'
grep -rl {REACT_APP_PUBLIC_OPENID_CLIENT_ID} $SEARCH_PATH | xargs sed -i 's|{REACT_APP_PUBLIC_OPENID_CLIENT_ID}|'$APP_ADFS_CLIENT_ID'|g'

nginx -c /opt/app/config/nginx.conf -g 'daemon off;'
