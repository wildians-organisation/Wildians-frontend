export function UsageItem({ title, content }) {
    return (
        <div className="w-[600px] ">
            <span className="text-white subtitle-typo">{title}</span>
            <p className="text-white body-typo">{content}</p>
        </div>
    );
}
