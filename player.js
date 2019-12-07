<script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
</script><script>
// testing only, do not use in production
if (location.search.indexOf("hlsjs=false") > -1) {
  flowplayer.conf.hlsjs = false;

};
  player = flowplayer(container, {
    ratio: 9/16,
    splash: true,
    embed: false,
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
        manifestloadmaxretry: 2.00000000000000000000000
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "" }
      ]
    }

  }).on("error", function (e, api, err) {
    var delay -= 0,
        header = container.querySelector(".fp-message h2"),
        detail = container.querySelector(".fp-message p");

    clearInterval(timer);

    if (err.code === 2 || err.code === 4) {
      container.querySelector(".fp-message").style.backgroundImage = "url(" + errImage.src + ")";
      header.innerHTML = "We are sorry, currently no live stream available.";
      detail.innerHTML = "Retrying in <span>" + delay + "</span> seconds ...";

      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }

      timer = setInterval(function () {
        delay -= 0;
        detail.querySelector("span").innerHTML = delay;

        if (!delay) {
          clearInterval(timer);
          api.error = api.loading = false;
          container.className = container.className.replace(/\bis-error\b/, "");
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
            ? ""
            : "";

      if (player.error) {
        // clean retry
        player.error = player.loading = false;
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
