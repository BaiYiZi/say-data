<style scoped src="./PeopleLivelihoodHomeView.css"></style>

<script setup>
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { ref, onMounted, onBeforeMount } from 'vue'
import Item from './Item.vue';

const router = useRouter()

const frameAppearanceAnimation = ref(false)
const boxAppearanceAnimation = ref(false)

function undeveloped() {
  ElMessage({
    message: '别点我啦! 正努力开发中呢~',
    type: 'warning'
  })
}

function goCulturalTourism() {
  router.push({ name: "cultural-tourism" })
}

function goHome() {
  router.push('/')
}

function goMap() {
  // TODO: Open page in current page
  // location.href =
  // 'https://map.baidu.com/search/%E4%BF%9D%E5%AE%9A%E5%B8%82/@12854364,4677424,13z?querytype=s&wd=%E4%BF%9D%E5%AE%9A%E5%B8%82&c=307&provider=pc-aladin&pn=0&device_ratio=1&da_src=shareurl'

  // TODO: Open page of new tab
  window.open(
    'https://map.baidu.com/search/%E4%BF%9D%E5%AE%9A%E5%B8%82/@12854364,4677424,13z?querytype=s&wd=%E4%BF%9D%E5%AE%9A%E5%B8%82&c=307&provider=pc-aladin&pn=0&device_ratio=1&da_src=shareurl'
  )
}

onBeforeMount(() => {
  window.WIDGET = {
    CONFIG: {
      layout: '1',
      width: '458',
      height: '200',
      background: '1',
      dataColor: 'FFFFFF',
      borderRadius: '12',
      city: 'CN101090201',
      key: 'a9b66cb10e334737992985a9e58040c7'
    }
  }
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0'
  document.getElementsByTagName('head')[0].appendChild(script)
})

onMounted(() => {
  frameAppearanceAnimation.value = !frameAppearanceAnimation.value

  {
    ; (() => {
      return new Promise((resolve) => setTimeout(resolve, 200))
    })().then(() => {
      boxAppearanceAnimation.value = !boxAppearanceAnimation.value
    })
  }
})
</script>

<template>
  <div class="container">
    <div class="header">
      <div @click="goHome">数说保定</div>
    </div>

    <div class="content">
      <div class="cnt-colum-left">
        <transition name="el-zoom-in-center">
          <div class="cnt-colum-left-up" v-show="frameAppearanceAnimation">
            <Item title="常用电话" more="http://www.114chn.com/tel.htm">
              <div class="cnt">
                <div class="line"></div>
                <div>
                  <table>
                    <thead>
                      <!-- <tr> -->
                        <th>名称</th>
                        <th>电话</th>
                      <!-- </tr> -->
                    </thead>
                    <tr>
                      <td>匪警</td>
                      <td>110</td>
                    </tr>
                    <tr>
                      <td>火警</td>
                      <td>119</td>
                    </tr>
                    <tr>
                      <td>急救中心</td>

                      <td>120</td>
                    </tr>
                    <tr>
                      <td>交通事故</td>
                      <td>122</td>
                    </tr>
                  </table>
                </div>
                <div>
                  <table>
                    <thead>
                      <!-- <tr> -->
                        <th>名称</th>
                        <th>电话</th>
                      <!-- </tr> -->
                    </thead>
                    <tr>
                      <td>市长热线</td>
                      <td>12345</td>
                    </tr>
                    <tr>
                      <td>文化市场举报</td>
                      <td>12318</td>
                    </tr>
                    <tr>
                      <td>水上求救专用</td>
                      <td>12395</td>
                    </tr>
                    <tr>
                      <td>公安短信报警</td>
                      <td>12110</td>
                    </tr>
                  </table>
                </div>
              </div>
            </Item>
          </div>
        </transition>

        <transition name="el-zoom-in-center">
          <div class="cnt-colum-left-down" v-show="frameAppearanceAnimation">
            <!-- <div class="title"><span>宣传相关</span><span @click="toMorePublicity">更多</span></div> -->
            <Item title="宣传相关" more="https://www.baoding.gov.cn/">
            <div class="list-box">
              <a class="li" href="https://mp.weixin.qq.com/s/r35XoiM1TdapMgmciK8-_A"
                target="_blank"><span>防汛减灾第12天</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/nsGqscRcBfnxdYhkEdY7Zg"
                target="_blank"><span>8.11依棉社区防减灾宣讲</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/LovpuzoHZezm-6C9mXjkZQ"
                target="_blank"><span>8.防汛抗洪第11天</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/rnJ6EBDxucVGxQxRasyFsA"
                target="_blank"><span>保定市各地体育活动速览</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/Z2k6r9IDCW7Kq6UQdYfVng"
                target="_blank"><span>保定籍选手索咪娅获得大运会跳水项目女子团体金牌</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/gKrjKRbQv-b-o6OSwrUw7w"
                target="_blank"><span>20分钟内夺两金！“劳模”李冰洁以八枚金牌收官大运会</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/IXeEunMfiqZATChU05UkeQ"
                target="_blank"><span>暴雨自救指南</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/8q5sQ4I-38a0n5oFPkt6KA" target="_blank"><span>【全民健身日
                  竞秀动起来】好消息，全民健身日期间一大波福利来袭~</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/OCt4e4K8serd5MAObzuXHw" target="_blank"><span>河北日报解读：保定一中女足
                  校园“玫瑰”如何绽放世界</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/Oe40Zvtzyg-7RnSGNmL6xw"
                target="_blank"><span>易县赈灾，尽我所能</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/oYmSgq5YLQGc-x6ZxQir8g"
                target="_blank"><span>保定蓝天抗洪救灾，介绍虽简单，贵在真实</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/1K2INKDWSCWNrDABg90rvA"
                target="_blank"><span>闪亮的瞬间——涞水抗洪第10天</span></a>
              <a class="li" href="https://mp.weixin.qq.com/s/M6hpacvidyCuWekSC4ckQw" target="_blank"><span>文化风情{{ '<360>'
              }} | 我以我笔写英雄——军旅作家宫洁民</span></a>
            </div>
            </Item>
          </div>
        </transition>
      </div>

      <div class="cnt-colum-middle">
        <transition name="el-zoom-in-center">
          <div class="cnt-colum-middle-up content-box-opacity-radius" v-show="frameAppearanceAnimation">
            <div class="cnt-colum-middle-up-left">
              <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                <div class="cnt-colum-middle-up-left-up box-public" @click="undeveloped">
                  <div>城乡发展</div>
                </div>
              </transition>

              <div class="cnt-colum-middle-up-left-middle">
                <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                  <div class="cnt-colum-middle-up-left-middle-left box-public" @click="undeveloped">
                    <div>医疗资源</div>
                  </div>
                </transition>

                <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                  <div class="cnt-colum-middle-up-left-middle-right box-public" @click="undeveloped">
                    <div>社会保障</div>
                  </div>
                </transition>
              </div>

              <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                <div class="cnt-colum-middle-up-left-down box-public" @click="undeveloped">
                  <div>就业发展</div>
                </div>
              </transition>
            </div>

            <div class="cnt-colum-middle-up-middle">
              <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                <div class="cnt-colum-middle-up-middle-up box-public" @click="undeveloped">
                  <div>养老服务</div>
                </div>
              </transition>

              <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
                <div class="cnt-colum-middle-up-middle-down box-public" @click="undeveloped">
                  <div>教育信息</div>
                </div>
              </transition>
            </div>

            <transition name="el-fade-in-linear" v-show="boxAppearanceAnimation">
              <div class="cnt-colum-middle-up-right box-public" @click="goCulturalTourism">
                <div>文化旅游</div>
              </div>
            </transition>
          </div>
        </transition>

        <transition name="el-zoom-in-center">
          <div class="cnt-colum-middle-down content-box-opacity-radius" v-show="frameAppearanceAnimation">
            <table>
              <tr>
                <td onclick="window.open('https://www.baoding.gov.cn/')"> >市政府</td>
                <td onclick="window.open('http://jyj.baoding.gov.cn/')"> >市教育局</td>
                <td onclick="window.open('http://kjj.baoding.gov.cn/')"> >市科学技术局</td>
                <td onclick="window.open('http://gxj.baoding.gov.cn/')"> >市工业和信息化局</td>
              </tr>
              <tr>
                <td onclick="window.open('http://zrgh.baoding.gov.cn/')"> >市自然资源和规划局</td>
                <td onclick="window.open('http://sthjj.baoding.gov.cn/')"> >市生态环境局</td>
                <td onclick="window.open('http://zjj.baoding.gov.cn/')"> >市住房和城乡建设局</td>
                <td onclick="window.open('http://zfj.baoding.gov.cn/')"> >市城市管理综合行政执法局</td>
              </tr>
              <tr>
                <td onclick="window.open('http://yjglj.baoding.gov.cn/')"> >市应急管理局</td>
                <td onclick="window.open('http://wsb.baoding.gov.cn/')"> >市外事办公室</td>
                <td onclick="window.open('http://gzw.baoding.gov.cn/')"> >市国有资产监督管理委员会</td>
                <td onclick="window.open('http://gaj.baoding.gov.cn/')"> >市公安局</td>
              </tr>
              <tr>
                <td onclick="window.open('http://sfj.baoding.gov.cn/')"> >市司法局</td>
                <td onclick="window.open('http://rsj.baoding.gov.cn/')"> >市人力资源和社会保障局</td>
                <td onclick="window.open('https://whgdhlyj.baoding.gov.cn/')"> >市文化广电和旅游局</td>
                <td onclick="window.open('http://wjw.baoding.gov.cn/')"> >市卫生健康委员会</td>
              </tr>
              <tr>
                <td onclick="window.open('https://bdgjj.baoding.gov.cn/')"> >市公积金中心管理中心</td>
                <td onclick="window.open('http://xzspj.baoding.gov.cn/')"> >市行政审批局</td>
                <td onclick="window.open('http://tyj.baoding.gov.cn/')"> >市体育局</td>
                <td onclick="window.open('http://slj.baoding.gov.cn/')"> >市水利局</td>
              </tr>
              <tr>
                <td onclick="window.open('http://scjgj.baoding.gov.cn/')"> >市市场监督管理局</td>
                <td onclick="window.open('http://fgw.baoding.gov.cn/')"> >市发展改革委员会</td>
              </tr>
            </table>
          </div>
        </transition>
      </div>

      <div class="cnt-colum-right">
        <transition name="el-zoom-in-center">
          <div class="cnt-colum-right-up content-box-opacity-radius" v-show="frameAppearanceAnimation">
            <div>
              <div id="he-plugin-standard"></div>
            </div>
            <div class="box-public" @click="goMap"><span>查看保定地图</span></div>
          </div>
        </transition>
        <transition name="el-zoom-in-center">
          <div class="cnt-colum-right-down" v-show="frameAppearanceAnimation">
            <Item title="通知公告" more="https://www.baoding.gov.cn/">
              <div class="list-box">
                <a class="li" href="https://www.baoding.gov.cn/content-159-405308.html"
                  target="_blank"><span>全力防范！我市启动重大气象灾害（暴雨）Ⅳ级应急响应</span></a>
                <a class="li" href="https://www.baoding.gov.cn/content-173-405596.html"
                  target="_blank"><span>举办专场招聘会</span></a>
                <a class="li" href="https://www.baoding.gov.cn/content-173-405520.html"
                  target="_blank"><span>基本公共卫生服务质量提升项目经验交流会</span></a>
                <a class="li" href="https://www.baoding.gov.cn/content-173-405390.html"
                  target="_blank"><span>第二届“文化旅游看河北——你不知道的特色小镇”媒体行活动</span></a>
                <a class="li" href="https://www.baoding.gov.cn/content-173-405315.html"
                  target="_blank"><span>中央媒体“高质量发展调研行”主题采访活动</span></a>
                <a class="li" href="https://www.baoding.gov.cn/content-173-405249.html"
                  target="_blank"><span>全省组织工作会议</span></a>
                <a class="li" href="https://www.gov.cn/zhengce/202305/content_6875434.htm"
                  target="_blank"><span>关于推进基本养老服务体系建设的意见</span></a>
                <a class="li" href="https://www.gov.cn/zhengce/content/202306/content_6887167.htm"
                  target="_blank"><span>国务院办公厅关于进一步构建高质量充电基础设施体系的指导意见</span></a>
                <a class="li" href="https://www.gov.cn/zhengce/202304/content_6762874.htm"
                  target="_blank"><span>关于进一步完善医疗卫生服务体系的意见</span></a>
                <a class="li" href="https://www.gov.cn/zhengce/202306/content_6886110.htm"
                  target="_blank"><span>关于构建优质均衡的基本公共教育服务体系的意见</span></a>
              </div>
            </Item>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
