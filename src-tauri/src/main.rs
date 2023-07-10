#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

use std::alloc::System;

use tauri::Manager;

#[global_allocator]
static ALLOCATOR: System = System;

pub(crate) mod commands;

#[tokio::main]
async fn main() {
    // Tell tauri to use our tokio runtime
    tauri::async_runtime::set(tokio::runtime::Handle::current());

    if let Err(error) = log4rs::init_file("./config/logging.toml", Default::default()) {
        eprintln!("Failed to configure logger: {}", error);
    }

    // Initialize RuntimeManager
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            window.open_devtools();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![commands::exit::exit_process])
        .run(tauri::generate_context!())
        .expect("Failed to generate and run tauri context");
}
