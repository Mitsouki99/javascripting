const fs = require ('fs')

module.exports = function (filepath) {
  return fs.readFileSync(filepath, 'utf8')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}
{ function fnOnLoad() {
        //alert("Form Loaded");
              var sAccessToken = '';
                    var params = {}, queryString = location.hash.substring(1),regex = /([^&=]+)=([^&]*)/g, m;
                          while (m = regex.exec(queryString)) {
                                      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
                                              }
                                                      if(params.error){
                                                                  if(params.error == "access_denied"){
                                                                                  sAccessToken = "access_denied";
                                                                                                  alert(sAccessToken);
                                                                                                              }
                                                                                                                      }else{
                                                                                                                                      sAccessToken = params.access_token;
                                                                                                                                                      alert(sAccessToken);
                                                                                                                                                              }
                                                                                                                                                                      window.opener.fnAuthorisationSuccess(sAccessToken);
                                                                                                                                                                              window.close();
                                                                                                                                                                                  }
}
