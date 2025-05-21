import { normalizeImagePath, useNavigate } from "rspress/runtime";
import FullyFeatured from "../components/Home/FullyFeatured";
import Hero from "../components/Home/Hero";
import { useI18n, useI18nUrl } from "../i18n";
import { useCallback } from "react";

export function HomeLayout() {

    const tUrl = useI18nUrl();
    const t = useI18n();

    const navigate = useNavigate();
    const handleClickGetStarted = useCallback(() => {
        navigate(tUrl('/guide/start/introduction'));
    }, [tUrl, navigate]);

    const handleClickGoToWebsite = useCallback(() => {
        navigate(tUrl('https://makepad.nl/'))
    }, [tUrl, navigate]);

    return (
        <>
            <Hero
                logo={normalizeImagePath(t('logo'))}
                title={t('heroTitle')}
                subTitle={t('heroSlogan')}
                description={t('heroSubSlogan')}
                getStartedButtonText={t('getStarted')}
                onClickGetStarted={handleClickGetStarted}
                goToWebsiteButtonText={t('goToWebsite')}
                onClickGoToWebsite={handleClickGoToWebsite}
            />
            <FullyFeatured />
        </>
    )
}
