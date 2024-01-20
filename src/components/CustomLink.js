import { useRouter } from "next/router";
import Link from "next/link";

function CustomLink({ href, title, className = "", underline = true }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link href={href} className={`${className}  group`}>
            {title}

            {underline && (
                <div
                    className={`
                        h-[2px]   bg-primary 
                         left-0 bottom-0
                        group-hover:w-full transition-[width] ease duration-300
                        ${isActive ? "w-full" : "w-0"}
                        bg-primary `}
                >

                </div>
            )}
        </Link>
    );
};

export default CustomLink;
