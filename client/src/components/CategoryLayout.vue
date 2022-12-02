<template>
    <div class="container">
        <h1 class="text-start fw-bold mt-2">Категории</h1>

        <div class="d-flex mb-3">
            <a class="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" href="#edit" aria-expanded="false" aria-controls="edit">Добавить</a>
        </div>
        <div class="collapse multi-collapse" id="edit">
            <div class="input-group input-group-sm mb-3 w-25">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Название</span>
                </div>
                <input type="text" class="form-control " aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="title">
                <div class="input-group-prepend ms-3">
                    <button class="btn btn-outline-success" v-on:click="create" data-bs-toggle="collapse" href="#edit" aria-controls="edit">Создать</button>
                </div>
            </div>
            <div>

            </div>
        </div>

        <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1" >
            <div class="card mb-3 border-0" v-for="value of stock" :key="value.stock">
                <a class="card-body btn btn-outline-secondary" :href="`/category/${value.id}`" >
                    <h5 class="card-title">{{value.title}}</h5>
                </a>
            </div>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'CategoryLayout',
        data() {
            return {
                stock: [],
                errors: []
            }
        },
        methods: {
            create: function () {
                axios.post(`http://localhost:3000/api/category`,{
                    title: this.title
                })
                    .catch(e => {
                        this.errors.push(e)
                    })
                console.log(this.title)
                location.reload()
            }
        },
        created() {
            axios.get('http://localhost:3000/api/category')
                .then(response => {
                    this.stock = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>