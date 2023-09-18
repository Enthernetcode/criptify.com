  <html>

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <!-- font-family: 'Open Sans', sans-serif; -->
    <link href='style/bootstrap.min.css' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="" />
    <link href='style/custom.css' rel='stylesheet' type='text/css'>
    <link href='style/default.css' rel='stylesheet' type='text/css'>
    <link href='style/tab.css' rel='stylesheet' type='text/css'>
    <link rel="icon" href="../styles/images/favicon.png">
    <script src='style/jquery.js' type='text/javascript'></script>
    <script src='style/setting2.js' type='text/javascript'></script>
    <script src='style/tab.js' type='text/javascript'></script>
    <script src='style/bootstrap.min.js' type='text/javascript'></script>
  </head>

  <body class="loginarea" style="zoom: 1;">
    <div class="wrapper-account">
      <div class="headerContainer">
        <div class="headerInner"><a href="customer.php" id="logo"></a>
          <div class="hdRight">
            <div class="mainNavRight">
              <div class="navbar">
                <div class="navbar-inner">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="inside_inner_account">
      <div class="member_wrap">
        <div class="membersidebar">
          <ul>
            <li><a href="customer.php">My Account</a></li>
            <li><a href="deposit.php">Deposit</a></li>
            <li><a href="deposit_history.php">Deposits History</a></li>
            <li><a href="withdraw.php">Withdraw</a></li>
            <li></li>
            <li><a href="referals.php">Referrals</a></li>
            <li><a href="logout.php">Logout</a></li>
          </ul>
        </div>
        <div class="member-container">
          <div class="account_top">
            <div class="user_left">
              <h2>Welcome, <span>test</span></h2>
            </div>
            <div class="affiliate_top">Affiliate Link:<a href="http://legalforexbroker.com/index/auth/signup.php?ref=test" class="ref-link">http://legalforexbroker.com/index.html?ref=test</a></div>
            <div class="get_banners"><a href="referallinks.php">Get Banners</a></div>
          </div>
          <div class="member_right">

            <h4 align="center">Send your bitcoin deposit to the address below:</h4>


            <div style="background-color:#0000ff;" align="center">
              <font color="yellow" size="5"><b><strong>33d3dX5kUTEvKV2QixfqB6uftC1BbaxMWq</strong></b></font>
            </div><br><br>
            <div class="member_right">

              <h4 align="center">Send your ethereum deposit to the address below:</h4>


              <div style="background-color:#0000ff;" align="center">
                <font color="yellow" size="5"><b><strong>0xa92e4fda8d0d80082e68a58d5788915e6c647ca1</strong></b></font>
              </div>
              <br><br>
              <div class="member_right">

                <h4 align="center">Send your USDT deposit to the address below:<br> TRC20</h4>


                <div style="background-color:#0000ff;" align="center">
                  <font color="yellow" size="5"><b><strong>TU8iybhZ4BgQfzV4H2dUu5oEGKA1d2L1Sc</strong></b></font>
                </div>
                <br><br><br>
                <br><br>
                <font color="red" size="5">
                  <marquee>Ensure to copy address properly and email a prove screenshot to info@cooperatefinance.com to avoid payment error
                  </marquee>
                </font><br><br><br><br>
              </div>
              <!--end column-70-->
            </div>
          </div>
        </div>

      </div>
      <div class="contentBotContainer">
        <div class="contentBotInner">
          <div class="ctn-top-solid">
            <h1>btc network </h1>
            <h2> wallets: </h2>
            <div class="solid-top">
              <a href="https://www.coinbase.com/" class="solidTop1"></a>
              <a href="https://blockchain.info/" class="solidTop2"></a>
              <a href="https://xapo.com/" class="solidTop3"></a>
              <a href="https://airbitz.co/" class="solidTop4"></a>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="ctn-bot-solid">
            <p>Market Cap: <span>$77829716960.00</span></p>
            <p>Hashrate: <span>7108353254.76</span></p>
            <p>Difficulty: <span>888171856257</span></p>
            <p>Total Blocks: <span>482882</span> </p>
            <p>Network Speed: <span>108.5 PH/s</span></p>
          </div>
        </div>
      </div>


      <div class="footerContainer">
        <div class="footerInner">
          <div class="ctn-footer-top">
            <div class="ctn-ft-left">
              <p>&copy; 2022 cooperatefinance.com All Rights Reserved.</p>
            </div>
            <div class="ctn-ft-mid">
              <a href=""><img src="styles/images/ft-top-ic1.png"></a>
            </div>
            <div class="ft-solid">
              <a href="https://www.facebook.com/VisualHyipcom/" target="_blank" class="per"></a>
              <a href="https://twitter.com/" target="_blank" class="bit"></a>

            </div>

          </div>
        </div>
      </div> <!-- end bot footer -->

      <script type="text/javascript">
        $(document).ready(function() {

          $('.accordion>dl>dt>a').click(function() {
            $(this).toggleClass("rotate0");
          });
          /*------- parse price --------*/
          function parsePriceCrypto() {
            returnString = "";

            $.post("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,ETH,BCH,XRP&tsyms=USD", function(data) {
              $('#price_btc').text('$' + data['BTC']['USD']);
              $('#price_ltc').text('$' + data['LTC']['USD']);
              $('#price_eth').text('$' + data['ETH']['USD']);
              $('#price_bch').text('$' + data['BCH']['USD']);
              $('#price_xrp').text('$' + data['XRP']['USD']);
            });
          }
          parsePriceCrypto();

          setInterval(function() {
            parsePriceCrypto();
          }, 5000);
        });

        $('.language').click(function() {
          $(this).toggleClass('active');
        });

        $('.mobileMenu').click(function() {
          $('.menu').toggleClass('mobile');
          $(this).toggleClass('rotate');
        });
      </script>
      <!--script src="//code.tidio.co/yl5qxh3kvmuslkmwjcz6bm7tnawlmxx9.js" async></script-->
      <!-- WhatsHelp.io widget -->
      <script type="text/javascript">
        (function() {
          var options = {
            whatsapp: "+1(321)529-9586",
            text: "Hello, how may we help you? Just send us a message now to get assistance.",
            abid: "+1(321)529-9586", // WhatsApp number

            call_to_action: "Message us", // Call to action
            position: "left", // Position may be 'right' or 'left'
          };
          var proto = document.location.protocol,
            host = "whatshelp.io",
            url = proto + "//static." + host;
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = url + '/widget-send-button/js/init.js';
          s.onload = function() {
            WhWidgetSendButton.init(host, proto, options);
          };
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        })();
      </script>
      <!-- /WhatsHelp.io widget -->
