import Layout from '@/component/Layout/Layout'
import React from 'react'
import { useTranslation } from 'react-i18next';

function Settings() {
    const { t } = useTranslation();

    return (
        <Layout>
            <div className='content px-10! py-3!'>
                <h1>{t("settings")}</h1>
            </div>
        </Layout>
    )
}

export default Settings