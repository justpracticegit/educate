<template>
<ProftestIntro />
</template>
<script>
import ProftestIntro from '@/components/ProftestIntro.vue'
import ProftestBar from '@/components/ProftestBar.vue'
import GetResultProfTest from '@/components/GetResultProfTest.vue'
import CreateAccount from '@/components/CreateAccount.vue'
import GetResult from '@/components/GetResult.vue'
import ResultTest from '@/components/ResultTest.vue'
export default {
    name:'proftest',
    components:{
        ProftestIntro
    }
}
</script>