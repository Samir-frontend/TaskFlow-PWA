import useInstallPrompt from "../../hooks/useInstallPrompt";

export default function InstallPrompt() {
  const { installable, installApp } = useInstallPrompt();

  if (!installable) return null;

  return (
    <div className="install-banner">
      <p>📲 Install TaskFlow for a better experience.</p>

      <button onClick={installApp}>
        Install App
      </button>
    </div>
  );
}