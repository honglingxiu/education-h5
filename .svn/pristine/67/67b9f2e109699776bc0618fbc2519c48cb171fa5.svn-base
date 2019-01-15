<template>
    <mt-popup v-model="popupVisible" position="bottom">
        <mt-picker :slots="PopupData" ref="mtPickerAge" showToolbar>
            <div class="picker-toolbar-title">
                <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">取消</div>
                <div class="">选择年龄</div>
                <div class="usi-btn-sure" @click="onComfirmChange">确定</div>
            </div>
        </mt-picker>
    </mt-popup>
</template>
<script>
    /**
     * <input class="form-control" readonly  v-model="formData.age" placeholder="请选择年龄" @click="showAgeList" />
     * <jb-age-list ref="ageList" :ageList="ageList" @onComfirmChange="onComfirmChange"></jb-age-list>
     * methods: {
            showAgeList(){
                this.$refs.ageList.popupVisible=true;
            }
            }

     */
    import {Picker, Popup} from 'mint-ui';
    export default {
        name: "jb-ageList",
        props:{
            ageList:{
                type:Array,
                default:()=>{
                    return ["4岁以下","4岁", "5岁", "6岁", "7岁", "8岁", "9岁", "10岁", "11岁", "12岁","12岁以上"];
                }
            }
        },
        data(){
            return {
                popupVisible:false
            }
        },
        computed:{
            PopupData(){
                return [{
                    values: this.ageList,
                    flex: 1,
                    defaultIndex: 2
                }]
            }
        },
        methods:{
            onComfirmChange(){
                this.$refs.mtPickerAge.setValues([this.ageList[2]]); //将下拉年龄列表恢复初始值
                this.popupVisible=false;
                this.$emit("onComfirmChange",this.$refs.mtPickerAge.getValues()[0]);
            }
        },
        components: {
            "mt-picker": Picker,
            "mt-popup": Popup
        }
    }
</script>
<style lang="less" scoped>
    .mint-popup {
        width: 100%;
        /deep/ .picker-item {
            opacity: .4;
            color: #000000;
            &.picker-selected {
                opacity: 1;
            }
        }
        .picker-toolbar-title{
            display:flex;
            flex-direction:row;
            justify-content: space-between;
            height:42px;
            line-height: 42px;
            font-size: 17px;
        }
        .usi-btn-cancel, .usi-btn-sure {
            color: #108ee9;
            padding: 1px 15px;
        }
    }
</style>