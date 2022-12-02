<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="/">By Dmitry Kang</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="/" class ="nav-link">Главная страница</a>
                    </li>
                    <li class="nav-item">
                        <a href="/categories" class ="nav-link">Категории</a>
                    </li>
                    <li class="nav-item">
                        <a href="/position" class ="nav-link">Позиции</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderComponent',
    }


</script>


