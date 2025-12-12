import React from 'react'
import NavBar from '@/component/Layout/NavBar';
import { useTranslation } from 'react-i18next';
import Layout from '@/component/Layout/Layout';
function Home() {
    const { t } = useTranslation();

    return (
        <Layout>
            <div className='content px-10! py-3!'>
                <h1>{t("welcome")}</h1>
            </div>
        </Layout>
    )
}

export default Home