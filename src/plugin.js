// Components
import Content from "./components/Content.vue";
import Softkeys from "./components/Softkeys.vue";
import Header from "./components/Header.vue";
import Input from "./components/Input.vue";
import InputMulti from "./components/InputMulti.vue";
import InputFloat from "./components/InputFloat.vue";
import Button from "./components/Button.vue";
import Text from "./components/Text.vue";
import Separator from "./components/Separator.vue";
import Tabs from "./components/Tabs.vue";
import TabItem from "./components/TabItem.vue";
import ListItem from "./components/ListItem.vue";
import Checkbox from "./components/Checkbox.vue";
import Slider from "./components/Slider.vue";
import Toast from "./components/Toast.vue";

// CSS & KaiOS icons
require("./assets/css/theme.css");
require("./assets/kai-font/style.css");

function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  Vue.component(Content.name, Content);
  Vue.component(Softkeys.name, Softkeys);
  Vue.component(Header.name, Header);
  Vue.component(Input.name, Input);
  Vue.component(InputMulti.name, InputMulti);
  Vue.component(InputFloat.name, InputFloat);
  Vue.component(Button.name, Button);
  Vue.component(Text.name, Text);
  Vue.component(Separator.name, Separator);
  Vue.component(Tabs.name, Tabs);
  Vue.component(TabItem.name, TabItem);
  Vue.component(ListItem.name, ListItem);
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(Slider.name, Slider);
  Vue.component(Toast.name, Toast);

  Vue.mixin({
    methods: {
      showToast(title, time) {
        this.$refs.content.showToast(title, time);
      },
    },
  });
}

const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
