<template>
    <div>
            <div class="choice">
                <el-checkbox-group v-model="checkboxGroup1">
                    <el-checkbox-button v-for="arr1 in Arr1" :label="arr1" :key="arr1">{{ arr1 }}</el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup2" size="medium">
                    <el-checkbox-button v-for="arr2 in Arr2" :label="arr2" :key="arr2">{{ arr2 }}</el-checkbox-button>
                </el-checkbox-group>
            </div>

            <div>
                <el-checkbox-group v-model="checkboxGroup3">
                    <el-checkbox-button v-for="arr3 in Arr3" :label="arr3" :key="arr3">{{ arr3 }}</el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup4">
                    <el-checkbox-button v-for="arr4 in Arr4" :label="arr4" :key="arr4">{{ arr4 }}</el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup5">
                    <el-checkbox-button v-for="arr5 in Arr5" :label="arr5" :key="arr5">{{ arr5 }}</el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup6">
                    <el-checkbox-button v-for="arr6 in Arr6" :label="arr6" :key="arr6">{{ arr6 }}</el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup7">
                    <el-checkbox-button v-for="arr7 in Arr7" :label="arr7" :key="arr7">{{ arr7 }}</el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup8">
                    <el-checkbox-button v-for="arr8 in Arr8" :label="arr8" :key="arr8">{{ arr8 }}</el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup9">
                    <el-checkbox-button v-for="arr9 in Arr9" :label="arr9" :key="arr9">{{ arr9 }}</el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup10">
                    <el-checkbox-button v-for="arr10 in Arr10" :label="arr10" :key="arr10">{{ arr10 }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup11">
                    <el-checkbox-button v-for="arr11 in Arr11" :label="arr11" :key="arr11">{{ arr11 }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup12">
                    <el-checkbox-button v-for="arr12 in Arr12" :label="arr12" :key="arr12">{{ arr12 }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup13">
                    <el-checkbox-button v-for="arr13 in Arr13" :label="arr13" :key="arr13">{{ arr13 }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div>
                <el-checkbox-group v-model="checkboxGroup14">
                    <el-checkbox-button v-for="arr14 in Arr14" :label="arr14" :key="arr14">{{ arr14 }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </div>



    </div>

</template>
<script>
const arr1 = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'];
const arr2 = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15'];
const arr3 = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15'];
const arr4 = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'];
const arr5 = ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'];
const arr6 = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15'];
const arr7 = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'];
const arr8 = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10'];
const arr9 = ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10'];
const arr10 = ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'];
const arr11 = ['C116', 'C117', 'C118', 'C119', 'C120'];
const arr12 = ['ECG+', 'ECG-'];
const arr13 = ['X1', 'X2', 'X3', 'X4'];
const arr14 = ['C127', 'C128'];
// const arr15 = ['DC1', 'DC2', 'DC3', 'DC4', 'DC5', 'DC6', 'DC7', 'DC8', 'DC9', 'DC10', 'DC11', 'DC12', 'DC13', 'DC14', 'DC15', 'DC16'];
export default {
    data() {
        return {
            checkboxGroup1: [''],
            checkboxGroup2: [''],
            checkboxGroup3: [''],
            checkboxGroup4: [''],
            checkboxGroup5: [''],
            checkboxGroup6: [''],
            checkboxGroup7: [''],
            checkboxGroup8: [''],
            checkboxGroup9: [''],
            checkboxGroup10: [''],
            checkboxGroup11: [''],
            checkboxGroup12: [''],
            checkboxGroup13: [''],
            checkboxGroup14: [''],
            // checkboxGroup15: [''],
            Arr1: arr1,
            Arr2: arr2,
            Arr3: arr3,
            Arr4: arr4,
            Arr5: arr5,
            Arr6: arr6,
            Arr7: arr7,
            Arr8: arr8,
            Arr9: arr9,
            Arr10: arr10,
            Arr11: arr11,
            Arr12: arr12,
            Arr13: arr13,
            Arr14: arr14,
            // Arr15: arr15,
        }
    }
}
</script>
<style scoped>
.title {
    display: flex;
    height: 60px;
    margin-top: 0;

}

.choice {
flex-direction: row;

}
.el-checkbox-group{
    display: flex;
    
}
.el-main{
    line-height: 60px;
}
.box-card{
    width: 100%;
    height: 100%;
}

</style>