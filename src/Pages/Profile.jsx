import Layout from '@/component/Layout/Layout'
import React from 'react'
import { useTranslation } from 'react-i18next';

function Profile() {
    const { t } = useTranslation();

    return (
        <Layout>
            <div className='content px-10! py-3!'>
                <h1>{t("profile")}</h1>
            </div>
        </Layout>
    )
}

export default Profile