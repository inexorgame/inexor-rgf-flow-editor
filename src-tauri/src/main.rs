#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    // Initialize RuntimeManager
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
