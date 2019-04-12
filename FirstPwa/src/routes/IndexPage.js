import React from 'react';
import { connect } from 'dva';
import Demo from "../components/Demo";
import './IndexPage.css';
import styles from './index.scss'

function IndexPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img src='http://img.mp.itc.cn/upload/20161222/b53fe74b146c47c199dc392f3749afbf_th.jpeg' alt='图1' />
        <img src='http://pic1.win4000.com/wallpaper/9/5450ae2fdef8a.jpg' alt='图2' />
        <img src='http://img.mp.itc.cn/upload/20170114/6d344be63ff747a19dfca00b419c8a84_th.jpg' alt='图3' />
        <img src='http://photocdn.sohu.com/20140122/Img393946903.jpg' alt='图4' />
        <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555076278345&di=8fdad92ade185a3668b32e122a01095f&imgtype=0&src=http%3A%2F%2Fpic24.nipic.com%2F20121028%2F10603471_013656870190_2.jpg' alt='图5' />
        <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555076310176&di=66c498bc2f58c3a2fd512ccc21398360&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F14%2F07%2F97b58PICEn4_1024.jpg' alt='图6' />
        <img src='http://a.hiphotos.baidu.com/zhidao/pic/item/0df3d7ca7bcb0a468a54751b6b63f6246b60af9a.jpg' alt='图7' />
        <img src='http://img8.zol.com.cn/bbs/upload/23487/23486163.JPG' alt='图8' />
        <img src='http://i0.hdslb.com/bfs/archive/e7fd605cfd928ce9bce58a365c1d06e739f96a75.jpg' alt='图9' />
        <img src='http://imgbdb2.bendibao.com/xiuxian/20136/20/201362016324761.jpeg' alt='图10' />
        <img src='http://up.enterdesk.com/edpic/e0/56/19/e0561992e3556ead761f8c06c95d1f72.jpg' alt='图11' />
        <img src='http://img5.duitang.com/uploads/item/201604/05/20160405165019_axHiM.jpeg' alt='图12' />
      </div>
      <Demo/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
