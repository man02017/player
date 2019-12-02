<script>
window.onload = function () {

  var container = document.getElementById("live"),
      player,
      initialDelay = 0,
      timer,
      // clone default errors for customization
      customErrors = flowplayer.defaults.errors.slice(0),
      customError = "<h2>We are sorry, currently no live stream available.</h2>"
                  + "<p>Retrying in <span>" + initialDelay + "</span> seconds ...</p>",
      // preload error image; case: user disconnects
      errImage = new Image();

  customErrors[2] = customError;
  customErrors[4] = customError;

  player = flowplayer(container, {
    // use custom errors 2 and 4
    errors: customErrors,
    ratio: 9/16,
    splash: true,
    live: true,
    share: false,
    clip: {
      hlsjs: {
        xhrSetup: function (xhr, url) {
          var isPlaylist = url.lastIndexOf(".m3u8") === url.length - 5;

          xhr.addEventListener("error", function () {
            if (isPlaylist) {
              // intentionally throw Network error
              player.trigger("error", [player, {code: 2}]);
            }
          });
          xhr.addEventListener("readystatechange", function (e) {
            var xstatus = e.currentTarget.status;
            if (isPlaylist && xhr.readyState === 4 && xstatus >= 400 && xstatus < 499) {
              // intentionally throw Video file not found error
              player.trigger("error", [player, {code: 4}]);
            }
          });
        }
      },
      flashls: {
        // limit amount of retries to load hls manifests in Flash
        manifestloadmaxretry: 2
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "http://ultraplay.online:80/live/Leonardo/Leonardo1/314.m3u8" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay = initialDelay;

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.className += " is-offline";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        var messageElement = container.querySelector(".fp-ui .fp-message");

        delay -= 1;

        if (delay && messageElement) {
          messageElement.querySelector("span").innerHTML = delay;
          // only for disconnected user:
          messageElement.style.backgroundImage = "url(" + errImage.src + ")";
        } else {
          clearInterval(timer);
          api.error = api.loading = false;
          if (messageElement) {
            container.querySelector(".fp-ui").removeChild(messageElement);
          }
          container.className = container.className.replace(/\bis-(error|offline)\b/g, "");
          api.load();
        }

      }, 1000);
    }

  });

  // preload error image in case of network timeouts
  errImage.src = "//demos.flowplayer.com/media/img/interruption.png";


  /*
   * the following is for demo purposes and simulation only
   * do not use in production!
   */

  var buttons = document.getElementsByTagName("button"),
      i;

  for (i = 0; i < buttons.length; i += 1) {
    buttons[i].onclick = function () {
      var errorstream = !this.id
          ? null
          : this.id === "dummy"
            ? "//edge.flowplayer.org/dummy-live.m3u8"
            : "//edge.flowplayer.org/non-existent.m3u8";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
        container.className = container.className.replace(/\bis-offline\b/, "");
        container.className = container.className.replace(/\bis-error\b/, "");
      }

      if (errorstream) {
        player.load({
          sources: [
            { type: "application/x-mpegurl", src: errorstream }
          ]
        });
      } else {
        player.load(player.conf.clip);
      }
    };
  }

};
</script>
