<template>
    <div class="form-wrapper">
        <Logo/>
        <div class="login-form">
            <h1 class="form-title">היי, טוב לראות אותך</h1>
            <div class="inputs">
                <Input label="מייל" :rules="emailRules" hint="כתובת המייל איתה נרשמת לחשבונית ירוקה"/>
                <Input label="סיסמה" :rules="passwordRules" type="password" hint="שכחת סיסמה?"/>
            </div>
            <div class="buttons">
                <Button text="כניסה" class="enter" :color="COLORS.basicButtonColor"/>
                <Button text="כניסה מהירה" class="google" :color="COLORS.outlineButtonColor" outlined/>
            </div>
            <div class="action-links">
                <a href="" :style="{color: COLORS.outlineButtonColor}">
                    עוד לא הצטרפת? ל-30 יום נסיון חינם
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from '../../../common/components/input.vue';
    import Button from '../../../common/components/button.vue';
    import Logo from '../../../common/components/logo.vue';
    import {required, isValidEmail} from '../data/inputValidations.js';
    import {COLORS} from '../../../common/constsants/colors.js';

        export default {
            name: 'login-form',
            components: {
                Input,
                Button,
                Logo
            },
            data() {
                return {
                    emailRules: [
                        required,
                        isValidEmail
                    ],
                    passwordRules: [required],
                    COLORS
                }
            }
    }
</script>

<style lang="scss" scoped>
   .form-wrapper {
        padding: 0 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-form {
            max-width: 420px;
            width: 100%;
            @media screen and (max-width: 600px) {
                mposition: relative;
                top: 5%;
            }
        }
        .form-title {
            font-family: "almoni-tzar-bold";
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 48px;
            text-align: right;
            margin-bottom: 70px;
            @media screen and (max-width: 600px) {
                margin-bottom: 40px;
                font-size: 2.75rem;
                text-align: center;
            }
        }
        .inputs {
            >div {
                margin-bottom: 50px;
                &:last-child {
                    margin-bottom: 80px;
                }
                @media screen and (max-width: 600px) {
                    margin-bottom: 30px;
                    &:last-child {
                        margin-bottom: 50px;
                    }
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