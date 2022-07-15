import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <!--  Defines the character encoding of the document -- > */}
          <meta charset="utf-8" />
          {/* <!--  Force chromium kernel to act on domestic dual core browsers such as 360 browser and QQ browser -- > */}
          <meta name="renderer" content="webkit" />
          {/* <!--  Force the chromium kernel to work on other dual core browsers -- > */}
          <meta name="force-rendering" content="webkit" />
          {/* <!--  If the Google chrome frame plug-in is installed, the chrome kernel is mandatory. Otherwise, the highest version of IE kernel supported by the machine is mandatory and works on IE browser -- > */}
          <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          {/* <!-- 
                Set window size
                Width sets the width of the layout viewport as a positive integer or the string "width device"
                Initial scale sets the initial scaling value of the page, which is a number and can take decimals
                Minimum scale allows the minimum scaling value of the user, which is a number with decimals
                Maximum scale allows the maximum scaling value of the user, which is a number with decimals
                Shrink to fit = no this is required in ios9 for the previous attributes to work
                Height sets the height of the layout viewport. This property is not important to us and is rarely used
                Whether user scalable allows users to scale. The value is "no" or "yes". No means not allowed, and yes means allowed
            --> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          {/* <!--  Page description -- > */}
          {/* <meta name="description" content="no more than 150 characters" /> */}
          {/* <!--  Page keywords -- > */}
          <meta
            name="keywords"
            content="tuankietcoder, k blog, kblog, blog, k, dev, develop, development, coding, code"
          />
          {/* <!--  Web author -- > */}
          <meta
            name="author"
            content="tuankietcoder, tuankietwebdevfw@gmail.com"
          />
          {/* <!-- 
            Search engine crawl
            All: the file will be retrieved and the links on the page can be queried; 
            None: the file will not be retrieved, and the links on the page cannot be queried;
            Index: the file will be retrieved; 
            Follow: links on the page can be queried; 
            Noindex: the file will not be retrieved; 
            Nofollow: links on the page cannot be queried. 
        --> */}
          <meta name="robots" content="index,follow" />
          {/* <!--  Ignore the identification of numbers in the page as phone, ignore the identification of email -- > */}
          <meta name="format-detection" content="telphone=no, email=no" />
          {/* <!-- IOS begin --> */}
          {/* <!--  Title added to the home screen (IOS 6 new) - > */}
          <meta name="Apple Mobile Web App title" content="title" />
          {/* <!--  When the website is added to the home screen quick start mode, the address bar can be hidden, which is only for Safari of IOS (the effect can not be seen on safari after ios7.0) - > */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          {/* <!--  Whether to enable webapp full screen mode and delete Apple's default toolbar and menu bar -- > */}
          <meta name="apple-touch-fullscreen" content="yes" />
          {/* <!--  Add smart app banner (IOS 6 + Safari) - > */}
          <meta
            name="apple-itunes-app"
            content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"
          />
          {/* <!--  Set the color of Apple toolbar: the default value is default (white), which can be set to black and black translucent -- > */}
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          {/* <!--  Don't let Baidu transcode -- > */}
          <meta http-equiv="Cache-Control" content="no-siteapp" />
          {/* <!--  Optimized for handheld devices, mainly for some old browsers that do not recognize viewport, such as BlackBerry -- > */}
          <meta name="HandheldFriendly" content="true" />
          {/* <!--  Microsoft's old browser -- > */}
          <meta name="MobileOptimized" content="320" />
          {/* <!--  UC force vertical screen -- > */}
          <meta name="screen-orientation" content="portrait" />
          {/* <!--  QQ forced vertical screen -- > */}
          <meta name="x5-orientation" content="portrait" />
          {/* <!--  UC force full screen -- > */}
          <meta name="full-screen" content="yes" />
          {/* <!--  QQ forced full screen -- > */}
          <meta name="x5-fullscreen" content="true" />
          {/* <!--  UC application mode -- > */}
          <meta name="browsermode" content="application" />
          {/* <!--  Application Mode -- > */}
          <meta name="x5-page-mode" content="app" />
          {/* <!--  Windows Phone click No highlight -- > */}
          <meta name="msapplication-tap-highlight" content="no" />
          {/* <!-- 
            IOS icon begin 
            Icon when a website is added to the IOS desktop
        --> */}

          {/* <!--  IPhone and iTouch, 57x57 pixels by default, must have -- > */}
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="table_ico57.png"
          />
          {/* <!--  Retina iPhone and retina iTouch, 114x114 pixels, may not be available, but it is recommended -- > */}
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="table_ico72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="table_ico114.png"
          />
          {/* <!--  Retina iPad, 144x144 pixels, not available, but recommended -- > */}
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="table_ico144.png"
          />
          {/* <!--  IOS startup screen begin -- > */}
          {/* <!--  IPad vertical 768 x 1004 (standard resolution) - > */}
          <link
            rel="apple-touch-startup-image"
            sizes="768x1004"
            href="/splash-screen-768x1004.png"
          />
          {/* <!--  IPad horizontal screen 1024x748 (standard resolution) - > */}
          <link
            rel="apple-touch-startup-image"
            sizes="1024x748"
            href="/Default-Portrait-1024x748.png"
          />
          {/* <!--  IPad vertical screen 1536x2008 (retina) - > */}
          <link
            rel="apple-touch-startup-image"
            sizes="1536x2008"
            href="/splash-screen-1536x2008.png"
          />
          {/* <!--  IPad horizontal screen 2048x1496 (retina) - > */}
          <link
            rel="apple-touch-startup-image"
            sizes="2048x1496"
            href="/splash-screen-2048x1496.png"
          />
          {/* <!--  IPhone / iPod touch vertical screen 320x480 (standard resolution) - > */}
          <link
            rel="apple-touch-startup-image"
            href="/splash-screen-320x480.png"
          />
          {/* <!--  IPhone / iPod touch vertical screen 640x960 (retina) - > */}
          <link
            rel="apple-touch-startup-image"
            sizes="640x960"
            href="/splash-screen-640x960.png"
          />
          {/* <!--  IPhone 5 / iPod touch 5 vertical screen 640x1136 (retina) - > */}
          <link
            rel="apple-touch-startup-image"
            sizes="640x1136"
            href="/splash-screen-640x1136.png"
          />
          {/* <!-- IOS end --> */}

          {/* <!--  Windows 8 tile color -- > */}
          <meta name="msapplication-TileColor" content="#000" />
          {/* <!--  Windows 8 tile icon -- > */}
          <meta name="msapplication-TileImage" content="icon.png" />
          {/* <!--  Add RSS subscription -- > */}
          <link rel="alternate" type="application/rss+xml" href="/rss.xml" />

          {/* <!--  Sns social tag begin -- > */}
          {/* <!--  Refer to microblog API -- > */}
          {/* <meta property="og: image" content="/icon-256x256.png" /> */}
          <link rel="icon" href="/icon-256x256.png" />

          {/* <!--  Sns social tag end -- > */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
