import { Orderstypes } from './../interfaces/orderstypes';


export const customerData: Orderstypes[] = [
    {
        case: 'كود خصم',
        action: `نعتذر للعميل ونوضح له انه لا يوجد كود خصم في الوقت الحالي،
        ويمكنه الاستفادة  من التوصيل المجاني المتاح من خلال التطبيق`
    }
]

export const cancelData: Orderstypes[] = [
    {
        case: 'اذا اوضح العميل رغبته في الغاء الطلب',
        action: `يجب ان نسأل العميل عن سبب رغبته في الغاء الطلب`
    },
    {
        case: 'اذا اوضح العميل ان سبب رغبته في الالغاء بسبب ان الشقردي غير متجاوب أو بعيد أو لا يريد توصيل الطلب',
        action: `نعتذر منه اولاً ثم يتم سؤال العميل اذا كان يريد تغيير الشقردي بالطلب اولاً`
    },
    {
        case: ' الطلب تأخر',
        action: `نعتذر من العميل ونقوم بمتابعة الطلب اولاً ثم نقوم بالتواصل مع الشقردي`
    },
    {
        case: 'في حالة التواصل مع الشقردي واوضح انه في طريقه لشراء الطلب',
        action: `نقوم بسؤال العميل برغبته في تغيير الشقردي ام يتم توصيل الطلب من الشقردي المتواجد بالطلب`
    },
    {
        case: 'في حالة التواصل مع الشقردي واوضح انه قام باستلام الطلب وفي طريقه الى منزل العميل',
        action: `نقوم بسؤال الشقردي على الوقت المتبقى لتوصيله الطلب الى منزل العميل نعتذر للعميل ونوضح له ان الشقردي في طريقه لتوصيل الطلب        `
    },
    {
        case: 'العميل اراد الغاء الطلب بشكل نهائى ولم يوضح السبب',
        action: `-نعتذر للعميل ونتواصل مع الشقردي لنتاكد اذا قام باستلام الطلب ام لا
    \n-نقوم بالغاء الطلب للعميل`
    },
    {
        case: 'العميل اراد الغاء الطلب لان المطعم مغلق او الاغراض غير متوافره',
        action: `-* في حالة المطعم مغلق:
        نقوم بالتواصل مع الشقردي ليقوم بارفاق صورة للمطعم وهو مغلق.
        ويتم رفع تيكت ل Partner care من خلال Freshdesk وتوضيح ان اوقات العمل مختلفة في التطبيق.
        ثم نقوم بالغاء الطلب.
        \n-* في حالة عدم توافر الاغراض بالمطعم:
        نقوم بالتواصل مع المتجر للتأكد من عدم توافر الاغراض الان ام غير متوافرة بشكل نهائى وتم حذفها بالمنيو.
        ويتم رفع تيكت ل Partner care من خلال Freshdesk وتوضيح ذلك.
        ثم نقوم بالغاء الطلب.
        `
    },
    {
        case: 'العميل ارد الغاء الطلب لعدم توافر قيمة الطلب لدى الشقردي',
        action: `نعتذر للعميل ونسأل العميل اذا اراد تغيير الشقردي بالطلب`
    },
]

export const recoveryDate:Orderstypes[]=[
    {
        case:'في حالة رغبة العميل ارجاع المبلغ المدفوع على حسابه البنكي',
        action:' نتأكد من محفظة العميل أو من اخر طلب في حساب العميل'
    },
    {
        case:'اذا قام العميل بشحن محفظته في ولم يقم باستخدام المبلغ ولم يمر 24 ساعه من ميعاد الشحن',
        action:' يتم ارجاع المبلغ على حسابه الشخصي'
    },
    {
        case:'اذا قام العميل بالدفع في طلب وتم الغاء الطلب ولم يمر 24 ساعه',
        action:`- يتم ارجاع المبلغ على حسابه الشخصي
        \n- يتم استرداد المبلغ في خلال 14 يوم الى 21 يوم
        \n- يجب ان يتم اخبار العميل برقم التيكت المرفوعة "برغبته في استرداد المبلغ على حسابه`
    },
    {
        case:'ذا قام العميل بالتواصل معنا بعد مرور مدة استرداد المبلغ وهي 21 يوم واوضح ان  المبلغ لم يصل الى حسابه',
        action:'نطلب من العميل ان يقوم بارسال كشف حساب من تاريخ طلبه لاسترداد المبلغ على  حسابه الى اليوم الذي قام بالتواصل فيه مع الدعم الفني ويتم رفع كشف الحساب الى القسم المالى لتتم مراجعة التحويل واذا تم التحويل، يتم توضيح الرقم المرجعي للعملية ليتم ارساله الى العميل'

    },
    {
        case:'اذا تخطى الطلب او شحن العميل لمحفظته 24 ساعه او اكثر لا نستطيع تحويل المبلغ على حساب العميل',
        action:'يجب ان نخبره باننا لا نستطيع تحويل المبلغ بسبب مرور اكثر من 24 ساعه على الطلب او على شحن المحفظة وان المبلغ سيكون بمحفظته في التطبيق وبامكانه الاستفاده من المبلغ في طلباته القادمة'
    },

]