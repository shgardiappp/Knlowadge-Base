import { Tabledata } from './../interfaces/tabledata';

export const generalData: Tabledata[] = [
    {
        case:'Canceling Orders / الغاء الطلبات',
        situation:['في حالة تواصل المندوب معنا أو تواصل مع العميل وطلب إلغاء الطلب بسبب طريقة الدفع غير المناسبة له, أو أن الطلب بعيد عنه, أو أنه استلم الطلب عن طريق الخطأ, إلخ...',' High Cancelation - Canceled More Than 3 orders per day / نسبة الغاء الطلبات مرتفعة - الغاء اكثر من 3 طلبات في اليوم'],
        actions:[[`إذا كانت أول أو ثاني مرة على مدار اليوم نرسل له هذا التحذير:
        \nعزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا، الرجاء عدم تكرار إلغاء الطلبات، تجنباً لإيقاف حسابك.
        \nDear Captain Shgardi, In order to offer the best service to our customers, please do not repeat cancelling orders to avoid suspending your account `]
        ,[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا، تم إيقاف حسابك لمدة 24 ساعة بسبب تكرار إلغاء الطلبات.
        \nDear Captain Shgardi, In order to offer the best service to our customers, your account has been suspended for 24 hours due to repeated cancellation of orders`]]
    },
    {
        case:`Being Late in a food order - Max 70 mins:
        \nفي حالة تأخر المندوب على العميل لمدة تزيد عن 70 دقيقة (الطلب Foodstuffs)
        `,
        situation:['إذا كانت أول مرة على مدار اليوم نرسل له هذا التحذير','Being Late in a food order for the second time - Max 70 mins:',
    `Being Late in an on demand order - Max 90 mins:
    في حالة تأخر المندوب على العميل لمدة تزيد عن 90 دقيقة (الطلب أون ديماند)\n:
    `],
        actions:[[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا الرجاء عدم التأخر على العملاء في توصيل الطلبات تجنباً لإيقاف حسابك.
        \nDear Captain Shgardi, In order to offer the best service to our customers, please do not being late in delivering orders to avoid suspending your account.`],
    [
    `عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا تم إيقاف حسابك لمدة ساعتين بسبب تأخير توصيل الطلبات للعملاء.
    \n-Dear Captain Shgardi, In order to offer the best service to our customers, your account has been suspended for two hours due to delayed delivery of orders to customers.`
    ],
    [
        `إذا كانت أول مرة على مدار اليوم نرسل له هذا التحذير:
        \nعزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا الرجاء عدم التأخر على العملاء في توصيل الطلبات تجنباً لإيقاف حسابك.
        \n-Dear Captain Shgardi, In order to offer the best service to our customers, please do not being late in delivering orders to avoid suspending your account`
    ,
    `Being Late in an on demand order for the second time - Max 90 mins:
    \nعزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا تم إيقاف حسابك لمدة ساعتين بسبب تأخير توصيل الطلبات للعملاء.
    \nDear Captain Shgardi, In order to offer the best service to our customers, your account has been suspended for two hours due to delayed delivery of orders to customers`
    ]]
    },
    {
        case:`Changing Payment Types first order / History: `,
        situation:['في حالة طلب المندوب من العملاء تغيير طريقة الدفع أول مرة نرسل له هذا التحذير','Changing Payment Types more than one time/day:'],
        actions:[[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا الرجاء عدم الطلب من العملاء تغيير طريقة الدفع داخل الطلب تجنباً لإيقاف حسابك.
        \n-Dear Captain Shgardi, In order to offer the best service to our customers, please do not ask customers to change the payment method within the order to avoid suspending your account.`],[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا تم إيقاف حسابك لمدة ساعتين بسبب طلبك من العملاء تغيير طريقة الدفع أكثر من مرة.
        Dear Captain Shgardi, In order to offer the best service to our customers, your account has been suspended for two hours due to your request to customers to change the payment method more than once.`]]
    
    },
    {
        case:'Fraud',
        situation:['في حالة احتيال المندوب على العميل نرسل له اشعار بغلق حسابه نهائيا'],
        actions:[[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا، تم غلق حسابك نهائيا بسبب احتيالك على العميل.
        \nDear Captain Shgardi, In order to offer the best service to our customers, your account has been permanently closed because of the fraud you committed against the customer.`]]
    
    },
    {
        case:'Harassment',
        situation:['في حالة تحرش المندوب بالعميل نرسل له اشعار بغلق حسابه نهائيا'],
        actions:[[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا،  تم غلق حسابك نهائيا وذلك بسبب تحرشك اللفظي بالعميل.
        \nDear Captain Shgardi, In order to offer the best service to our customers, your account has been permanently closed because your verbal harassment of the customer.`]]
    
    },
    {
        case:'Bad behavior with customer',
        situation:['في حالة تجاوز المندوب مع العميل يتم تحذيره لمدة 24 ساعه'],
        actions:[[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا، تم حظر حسابك لمدة 24 ساعه وذلك بسبب تجاوزك مع العميل.
        \nDear Captain Shgardi, In order to offer the best service to our customers, your account has been blocked for 24 hours because offended the customer.`]]
    
    },
    {
        case:"Asked For personal bank account transfer instead of App's Payment Types First order/History",
        situation:['في حالة طلب المندوب من العميل للتحويل على حسابه الشخصي بدلا من طرق الدفع بالتطبيق في اول طلب تحذيره'],
        actions:[[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا، تم ايقاف حسابك لمدة ساعتين وذلك بسبب طلبك من العميل التحويل على حسابك الشخصي.
        \nDear Captain Shgardi, In order to offer the best service to our customers, your account has been suspended for two hours due to your request to the customer to transfer on your personal bank account.
        `]]
    
    },
    {
        case:"Didn't return the Change to the Customer",
        situation:['في حالة المندوب لم يقم بارجاع باقي قيمة الطلب الى العميل يتم حظر حسابه لمدة 24 ساعه'],
        actions:[[ `عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا، سيتم ايقاف حسابك لمدة 24 ساعه وذلك بسبب عدم ارجاع باقي قيمة الطلب الى العميل.
        \nDear Captain Shgardi, In order to offer the best service to our customers, Due to your request that you do not return the remaining amount to the customer.`]]
    
    },
    {
        case:'Asked the Customer For additional Cost:',
        situation:['في حالة طلب المندوب مبلغ اضافي من العميل على قيمة الطلب يتم حظر حساب المندوب لمدة 24 ساعه'],
        actions:[[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا، سيتم ايقاف حسابك لمدة 24 ساعه وذلك بسبب طلبك مبلغ اضافي في الطلب.
        \nDear Captain Shgardi, In order to offer the best service to our customers, due to your request for an additional amount.
        `]]
    
    },
    {
        case:"Courier don't Have Order Price",
        situation:['في حالة ان المندوب ليس معه قيمة الطلب (اقل من 200 ريال)'],
        actions:[[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا،يجب توافر معك مبلغ 200 ريال على الاقل لشراء طلبات العميل.
        Dear Captain Shgardi, In order to offer the best service to our customers,you should have 200 SR at least to buy customer orders.
        `]]
    
    },
    {
        case:"Courier don't use this number or someone else use his account",
        situation:['في حالة ان المندوب لا يستخدم الحساب او شخص اخر الذى يستخدمه'],
        actions:[[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا، تم غلق حسابك نهائيا وذلك بسبب استخدامك الشخصى للتطبيق.
        \nDear Captain Shgardi, In order to offer the best service to our customers,your account has been permanently closed because you didnot use the account.`]]
    
    },
    {
        case:"Courier don't use this number or someone else use his account",
        situation:['ي حالة ان المندوب لا يستخدم الحساب او شخص اخر الذى يستخدمه'],
        actions:[[`عزيزي كابتن شقردي, حرصاً منا على تقديم أفضل خدمة لعملائنا، تم غلق حسابك نهائيا وذلك بسبب استخدامك الشخصى للتطبيق.
    \nDear Captain Shgardi, In order to offer the best service to our customers,your account has been permanently closed because you didnot use the account.`]]
    }
]
