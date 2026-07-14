export default function ProjectTag({ props }: { props: any }) {
    const handleType = (type: string) => {
      props.setProjectType(type);
    };
  
    const projectTypes = ["Web", "ML", "n8n"];
  
    return (
      <div className="mb-10 flex w-full flex-wrap items-center justify-center gap-6 md:justify-start">
        {projectTypes.map((projectType) => {
          const isActive = props.projectType === projectType;
  
          return (
            <button
              key={projectType}
              type="button"
              onClick={() => handleType(projectType)}
              className={`rounded-2xl border px-6 py-2.5 font-DMMono-regular text-sm transition-all duration-300 sm:px-8 sm:text-base ${
                isActive
                  ? "border-(--color-accent) bg-(--color-accent) text-black shadow-md"
                  : "border-(--color-text-secondary)/20 bg-(--color-card)/20 text-(--color-text-secondary) hover:border-(--color-accent)/60 hover:bg-(--color-card)/50 hover:text-(--color-text)"
              }`}
            >
              {projectType === "ML" ? "Machine Learning" : projectType}
            </button>
          );
        })}
      </div>
    );
  }