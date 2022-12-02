<template>
    <div class="container">
        <h1 class="text-start fw-bold mt-2">Позиции</h1>

        <div class="d-flex mb-2">
            <a class="btn btn-outline-secondary" :href="`/position/new`">Создать</a>
        </div>
        <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1" >
            <CartItem v-for="item of stock" :key="item.categoryId" :item="item"></CartItem>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'
    import CartItem from "@/components/CartItem";

    export default {
        name: 'PositionLayout',
        components: {CartItem},
        data() {
            return {
                stock: [],
                errors: []
            }
        },
        created() {
            axios.get('http://localhost:3000/api/position/')
                .then(response => {
                    this.stock = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>