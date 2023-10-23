export function UsageItem({ title, content }) {
    return (
        <div className="w-[600px]">
            <span className="text-white text-xl font-extrabold">{title}</span>
            <p className="text-white text-base">{content}</p>
        </div>
    );
}
