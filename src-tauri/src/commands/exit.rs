#[tauri::command]
pub fn exit_process() {
    std::process::exit(0);
}
