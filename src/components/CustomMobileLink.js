import { useRouter } from "next/router";

const CustomMobileLink = ({ href, title, className = "", toggle, underline = true }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    const isActive = router.asPath === href;

    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}
        >
            {title}

            {underline && (
                <span
                    className={`
                        h-[1px] inline-block bg-light dark:bg-dark
                        absolute left-0 -bottom-0.5
                        group-hover:w-full transition-[width] ease duration-300
                        ${isActive ? "w-full" : "w-0"}`}
                >
                    &nbsp;
                </span>
            )}
        </button>
    );
};

export default CustomMobileLink;
