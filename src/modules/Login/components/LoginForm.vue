<template>
    <div class="form-wrapper">
        <div class="login-form">
            <h1 class="form-title">היי, טוב לראות אותך</h1>
            <div class="inputs">
                <Input label="מייל" message="כתובת המייל איתה נרשמת לחשבונית ירוקה"/>
                <Input label="סיסמה" message="שכחת סיסמה?"/>
            </div>
            <div class="buttons">
                <Button text="כניסה" class="enter" color="#18C746"/>
                <Button text="כניסה מהירה" class="google" color="#0084F4" outlined/>
            </div>
            <div class="action-links">
                <a href="">
                    עוד לא הצטרפת? ל-30 יום נסיון חינם
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from '../../../components/input.vue';
    import Button from '../../../components/button.vue';
        export default {
            name: 'login-form',
            components: {
                Input,
                Button
            },
    }
</script>

<style lang="scss" scoped>
   .form-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            .form-title {
                font-family: "almoni-tzar-bold";
                font-size: 3.5rem;
                font-weight: bold;
                letter-spacing: 0;
                line-height: 48px;
                text-align: right;
                margin-bottom: 70px;
            }
            .inputs {
                >div {
                    margin-bottom: 20px;
                    &:last-child {
                        margin-bottom: 80px;
                    }
                    @media screen and (max-width: 600px) {
                        margin-bottom: 50px;
                    }
                }
            }
            .buttons {
                margin-bottom: 25px;
                @media screen and (max-width: 600px) {
                    flex-direction: column;
                }
                button {
                    box-shadow: none;
                    font-family: "almoni-neue-dl";
                    font-weight: bold;
                    width: 100%;
                    &.enter {
                        margin-bottom: 15px;
                    }
                    @media screen and (min-width: 601px) {
                        &.enter {
                            width: 55%;
                            margin-bottom: 0;
                        }
                        &.google {
                            width: 40%;    
                        }
                    }
                    
                }
                display: flex;
                direction: rtl;
                justify-content: space-between;
            }
            .action-links {
                width: 100%;
                text-align: right;
                text-decoration: underline;
                @media screen and (max-width: 600px) {
                    text-align: center;
                }
            }
        }
</style>