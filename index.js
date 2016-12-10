window.addEventListener('load', () => {
  window.foo = "bar";
  /*  Vue.component('my-footer', {
   template: `<section>
   <a v-for="link in links" :href="link.url">
   {{link.title}}<img v-bind:src="link.imgSrc">
   </a>
   </section>`,
   data: function () {
   return {
   links: [
   {
   title: 'Google',
   url: 'http://www.google.com',
   imgSrc: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
   },
   {
   title: 'Yahoo',
   url: 'http://www.yahoo.com',
   imgSrc: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
   }
   ]
   };
   }
   });*/

  this.app = new Vue({
    el: "#content",
    data: {
      message: "Hello there",
      time: Date(),
      showTime: true/*,
       author: "Gaurang Patel",
       authorTime: Date()*/,
      comments: [
        {
          author: "Gaurang Patel",
          authorTime: Date()
        },
        {
          author: "Jalpa Patel",
          authorTime: Date()
        },
        {
          author: "Kyle Simpson",
          authorTime: Date()
        }]
    },
    watch: {
      message: function (val, oldVal) {
        console.log('message watcher fired');
      }
    },
    methods: {
      handleClick: function (event) {
        debugger;
        console.log(event);
      }
    },
    components: {
      'comment': {
        props: {
          data: {
            type: Object,
            /*default: {
             author: 'Alice',
             authorTime: '2016AD'
             },*/
            validator: function (value) {
              return typeof value.author !== 'undefined' && typeof value.authorTime !== 'undefined'
            }
          }
        },
        template: "<div>{{data.author}} commented on {{data.authorTime}}</div>"/*,
         data: {
         author: "Jalpa Patel",
         authorTime: Date()
         }*/
      },
      'my-footer': {
        template: `<section>
        <a v-for="link in links" :href="link.url">
         {{link.title}}<img v-bind:src="link.imgSrc">
        </a>
      </section>`,
        data: function () {
          return {
            links: [
              {
                title: 'Google',
                url: 'http://www.google.com',
                imgSrc: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              },
              {
                title: 'Yahoo',
                url: 'http://www.yahoo.com',
                imgSrc: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              }
            ]
          };
        }
      }
    }
  });


  /*  this.footer = new Vue({
   el: `section[foo="footer"]`,
   data: {
   links: [
   {
   title: 'Google',
   url: 'http://www.google.com',
   imgSrc: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
   },
   {
   title: 'Yahoo',
   url: 'http://www.yahoo.com',
   imgSrc: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
   },
   ]
   }
   });*/
})
;