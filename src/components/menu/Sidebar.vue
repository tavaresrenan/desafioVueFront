<template>
    <nav class="sidebar">
        <p>SEMANTIX</p>
        <ul>
            <li 
                v-for="item in items" 
                :key="item.id"
                :class="{sidebarclick:item.id == selected}"
                @click="loadPage(item)">
                    <div class="sidebar-icons">
                        <ion-icon :name="item.icon" size="large"></ion-icon>
                    </div>
                    <span>{{item.text}}</span>
                </li>
        </ul>
    </nav>
</template>

<script>
import { Bus } from '../../bus';

export default {
    name: 'Sidebar',
    props: {
        items: Array
    },
    data: function(){
        return {
            selected: undefined
        }
    },
    methods: {
      loadPage (item){
          this.selected = item.id;
          Bus.$emit('loadPage', item.text);
          this.$router.push(`/page/${item.id}`);
      }
  }
}
</script>

<style scoped>
    .sidebar{
        height: 100vh;
        width: 105px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        outline: none;
        background: linear-gradient(180deg, #000000 0%, #B5B5B5 100%);
    }
    .sidebar p {
        padding: 0.3em;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }
    .sidebar ul {
        list-style: none;
        padding: 0.5em 0;
        margin: 0;
    }
    .sidebar ul li {
        height: 85px;
        padding: 0.5em 0em 0.5em 1.5em;
        font-size: 0.95em;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        transition: all 0.15s linear;
        cursor: pointer;
    }
    .sidebar ul li span {
        display: flex;
    }
    .sidebar ul li:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    .sidebar ul li:focus {
        outline: none;
    }
    .sidebarclick {
        background: rgba(255, 255, 255, 0.2);
    }
    .sidebar-icons {
        padding: 0.3em;
    }
    @media screen and (max-width: 900px) and (min-width: 400px) {
        .sidebar {
            width: 90px;
        }
        .sidebar ul li {
            height: 60px;
            background-position: center center;
            background-size: 30px auto;
            position: relative;
        }
        .sidebar ul li span {
            opacity: 0;
            position: absolute;
            background: rgba(0, 0, 0, 0.5);
            padding: 0.2em 0.5em;
            border-radius: 4px;
            top: 50%;
            left: 80px;
            transform: translate3d(-15px, -50%, 0);
            transition: all 0.15s ease-in-out;
        }
        .sidebar ul li span:before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            top: 50%;
            left: -5px;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-right: 5px solid rgba(0, 0, 0, 0.5);
            transform: translateY(-50%);
        }
        .sidebar ul li:hover span {
            opacity: 1;
            transform: translate3d(0px, -50%, 0);
        }
    }
</style>